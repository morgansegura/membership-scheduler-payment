import styled from '@emotion/styled'
import { Theme } from 'styles/config/interfaces/Theme'

export const StyledAuthorCard = styled.div`
  .MuiAuthorCard-root {
    width: 100%;
    padding-right: 1.875rem;

    @media screen and (min-width: ${(props: Theme) => props.theme.breakpoints.values.md}px) {
      max-width: 650px;
    }
  }
  .MuiAuthorCardInnerContainer-root {
    display: flex;
    gap: 1.875rem;
  }
  .MuiAuthorCardMedia-root {
    max-width: 250px;
    max-height: 265px;
  }
  .MuiAuthorCardContentContainer-root {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }
  .MuiAuthorCardContent-root {
  }
  .MuiAuthorCardTitle-root {
    padding-top: 1rem;
    line-height: 1.5;
    font-size: 1.5rem;
    font-weight: 600;
  }
  .MuiAuthorCardSubtitle1-root {
    line-height: 1;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props: Theme) => props.theme.palette.text.secondary};
  }
  .MuiAuthorCardSubtitle2-root {
    line-height: 1.25;
    font-size: 0.75;
    font-weight: 600;
    color: ${(props: Theme) => props.theme.palette.text.secondary};
  }
  .MuiDataDisplay-root {
    flex: 1 0 auto;
    display: flex;
    justify-content: space-between;
    border-radius: 6px;
    background-color: ${(props: Theme) => props.theme.palette.grey[100]};
    padding: 1.25rem 1.875rem 1rem 1.25rem;
    margin-top: 1.5rem;
  }
  .MuiDataDisplayGroupContainer-root {
  }
  .MuiDataDisplayMetaNumber-root {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.7;
  }
  .MuiAuthorCardActions-root {
    position: relative;
    z-index: 1000;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    padding: unset;
    margin-top: 1.25rem;
  }
  .MuiAuthorCardActionButton-root {
    text-transform: initial;
    padding-top: 1rem;
    padding-bottom: 1rem;
    min-width: 110px;
    flex: 1 0 auto;
    display: flex;

    &:not(:first-of-type) {
      margin-left: unset;
    }
  }
`
