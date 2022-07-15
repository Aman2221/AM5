import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LicenseManager } from 'ag-grid-enterprise';

LicenseManager.setLicenseKey('CompanyName=digital dandelion,LicensedApplication=aztec-innovation-hub,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-018073,ExpiryDate=14_August_2022_[v2]_MTY2MDQzMTYwMDAwMA==f8ad810315c072f84d6f66fca800124e');

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
