import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Beyond Sensation — Beyond the noise. Into perspective.',icons:{icon:'/brand/beyond-sensation-icon.svg'},description:'Beyond the noise. Into perspective. World affairs, geopolitics, politics and national interest. Source-led reporting, thoughtful perspectives and clearly labelled possible futures.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
