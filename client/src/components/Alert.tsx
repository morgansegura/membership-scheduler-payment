import React, { useState, useEffect } from 'react'
import { Router } from 'next/router'

// [Api]
import { alertService, AlertType } from 'api'
// [Styles]
import { AlertContainer, AlertContent, AlertItem } from 'styles/Alert'
// [Icons]
import { GrFormClose } from 'react-icons/gr'

type AlerProps = {
    id?: string
    fade?: boolean
}

function Alert({ id = 'default-alert', fade = true }: AlerProps) {
    const [alerts, setAlerts] = useState<any[]>([])

    useEffect(() => {
        // subscribe to new alert notifications
        const subscription = alertService.onAlert(id).subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                setAlerts(alerts => {
                    // filter out alerts without 'keepAfterRouteChange' flag
                    const filteredAlerts = alerts.filter(x => x.keepAfterRouteChange)

                    // remove 'keepAfterRouteChange' flag on the rest
                    filteredAlerts.forEach(x => delete x.keepAfterRouteChange)
                    return filteredAlerts
                })
            } else {
                // add alert to array
                setAlerts(alerts => [...alerts, alert])

                // auto close alert if required
                if (alert.autoClose) {
                    setTimeout(() => removeAlert(alert), 5000)
                }
            }
        })

        // clear alerts on location change
        const historyUnlisten: any = () =>
            Router.events.on('beforeHistoryChange', (pathname: string) => {
                // don't clear if pathname has trailing slash because this will be auto redirected again
                if (pathname.endsWith('/')) return

                alertService.clear(id)
            })

        // clean up function that runs when the component unmounts
        return () => {
            // unsubscribe & unlisten to avoid memory leaks
            subscription.unsubscribe()
            historyUnlisten()
        }
    }, [])

    function removeAlert(alert: any) {
        if (fade) {
            // fade out alert
            const alertWithFade = { ...alert, fade: true }
            setAlerts(alerts => alerts.map(x => (x === alert ? alertWithFade : x)))

            // remove alert after faded out
            setTimeout(() => {
                setAlerts(alerts => alerts.filter(x => x !== alertWithFade))
            }, 100)
        } else {
            // remove alert
            setAlerts(alerts => alerts.filter(x => x !== alert))
        }
    }

    function cssClasses(alert: any) {
        if (!alert) return

        const classes = ['alert', 'alert-dismissable']

        const alertTypeClass = {
            [AlertType.Success]: 'alert-success',
            [AlertType.Error]: 'alert-danger',
            [AlertType.Info]: 'alert-info',
            [AlertType.Warning]: 'alert-warning',
        }

        classes.push(alertTypeClass[alert.type])

        if (alert.fade) {
            classes.push('onExit')
        } else {
            classes.push('onEnter')
        }

        return classes.join(' ')
    }

    if (!alerts.length) return null

    return (
        <AlertContainer>
            <AlertContent>
                {alerts.map((alert, index) => (
                    <AlertItem key={index} className={cssClasses(alert)}>
                        <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
                        <a className="close" onClick={() => removeAlert(alert)}>
                            <GrFormClose />
                        </a>
                    </AlertItem>
                ))}
            </AlertContent>
        </AlertContainer>
    )
}

export { Alert }
