import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen"
import { DigiLinkInternal, DigiNotificationErrorPage } from "@digi/arbetsformedlingen-react"

const NotFound = () => {
  return (
    <DigiNotificationErrorPage 
    afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}
  >
    <ul slot="links">
      <li>
        <DigiLinkInternal afHref="/" afVariation="small">
          Gå tillbaka till föregående sida
        </DigiLinkInternal>
      </li>
      <li>
        <DigiLinkInternal afHref="/" afVariation="small">
          Till startsidan
        </DigiLinkInternal>
      </li>
    </ul>
  </DigiNotificationErrorPage>
  )
}

export default NotFound
