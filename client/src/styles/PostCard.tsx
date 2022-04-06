import styled from '@emotion/styled'
import { Theme } from 'styles/config/interfaces/Theme'

export const StyledPostCard = styled.div`
  .MuiPostCard-root {
    width: 100%;
    /* max-width: 650px; */
    @media screen and (min-width: ${(props: Theme) => props.theme.breakpoints.values.md}px) {
      padding-right: 2.1875rem;
      max-width: 1104px;
    }
  }
  .MuiPostCardInnerContainer-root {
    display: flex;
    flex-direction: column;
    gap: 2.1875rem;

    @media screen and (min-width: ${(props: Theme) => props.theme.breakpoints.values.md}px) {
      flex-direction: row;
    }
  }
  .MuiPostCardMedia-root {
    max-height: 385px;

    @media screen and (min-width: ${(props: Theme) => props.theme.breakpoints.values.md}px) {
      max-width: 518px;
    }
  }
  .MuiPostCardContentContainer-root {
    display: flex;
    flex-direction: column;
  }
  .MuiPostCardTitle-root {
    padding-top: 1rem;
    line-height: 1.5;
    font-size: 1.875rem;
    font-weight: 500;
  }
  .MuiPostCardBody1-root {
    line-height: 1.75;
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props: Theme) => props.theme.palette.text.secondary};
  }
  .MuiPostCardAuthorContainer-root {
    display: flex;
    gap: 1.25rem;
    padding-top: 2.1875rem;
    padding-bottom: 1.875rem;
  }
  .MuiPostCardAuthorAvatar-root {
    width: 60px;
    height: 60px;
  }
  .MuiPostCardAuthorTitle-root {
    margin-top: 0.5rem;
    line-height: 1.125;
    font-size: 1.125rem;
    font-weight: 500;
    color: ${(props: Theme) => props.theme.palette.text.primary};
  }
  .MuiPostCardAuthorDate-root {
    line-height: 1.875;
    font-size: 1.125rem;
    color: ${(props: Theme) => props.theme.palette.text.secondary};
  }
`
