import React from 'react'
import { Sidebar } from '@/components/ui/sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
const Layout = ({children}:{children:React.ReactNode}) => {

  return (
    <SidebarProvider>
    <div>
        <AppSidebar />
        
        <main className='p-6'>{children}</main>
        <SidebarTrigger />
        <footer className=''>Footer</footer>
    </div>
    </SidebarProvider>
  )
}

export default Layout