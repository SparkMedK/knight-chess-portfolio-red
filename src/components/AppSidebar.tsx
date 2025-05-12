
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Trophy,
  User,
  BookOpen,
  Calendar,
  Image,
  Mail,
  Home,
  Globe
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  useSidebar
} from '@/components/ui/sidebar';
import LanguageSelector from './LanguageSelector';

const navigationItems = [
  { id: 'home', icon: Home, href: '#' },
  { id: 'about', icon: User, href: '#about' },
  { id: 'achievements', icon: Trophy, href: '#achievements' },
  { id: 'training', icon: BookOpen, href: '#training' },
  { id: 'tournaments', icon: Calendar, href: '#tournaments' },
  { id: 'gallery', icon: Image, href: '#gallery' },
  { id: 'contact', icon: Mail, href: '#contact' }
];

const SidebarContent = () => {
  const { t } = useLanguage();
  const { toggleSidebar } = useSidebar();
  
  const handleNavClick = () => {
    // Close sidebar on navigation item click (on mobile)
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-4">
        <div className="flex items-center gap-2">
          <div className="animate-float">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 22H5V2h14v20z" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17.5c2.5 0 4.5-2 4.5-4.5 0-1.5-.5-2.5-1.5-3.5L12 7l-3 2.5C8 10.5 7.5 11.5 7.5 13c0 2.5 2 4.5 4.5 4.5z" fill="#B91C1C" stroke="#B91C1C"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight">
            Samion Magnus
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('nav.navigation')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={t(`nav.${item.id}`)}
                    onClick={handleNavClick}
                  >
                    <a href={item.href}>
                      <item.icon className="size-4" />
                      <span>{t(`nav.${item.id}`)}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex justify-center items-center p-4">
        <LanguageSelector />
      </SidebarFooter>
    </Sidebar>
  );
};

export const AppSidebar = () => {
  return <SidebarContent />;
};

export default AppSidebar;
