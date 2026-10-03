import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CompanyOverview } from './components/CompanyOverview';
import { ClientTrust } from './components/ClientTrust';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyAxNow } from './components/WhyAxNow';
import { ProcessSection } from './components/ProcessSection';
import { ServiceFootprint } from './components/ServiceFootprint';
import { MeetTheTeam } from './components/MeetTheTeam';
import { EmergencyBanner } from './components/EmergencyBanner';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { RequestServiceModal } from './components/RequestServiceModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { TeamModal } from './components/TeamModal';
import { EmergencyModal } from './components/EmergencyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './data/servicesData';

export default function App() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedServiceForRequest, setSelectedServiceForRequest] = useState<string>('');
  const [requestUrgency, setRequestUrgency] = useState<'standard' | 'urgent' | 'emergency'>('standard');
  
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  const handleOpenRequestService = (serviceName?: string, urgency: 'standard' | 'urgent' | 'emergency' = 'standard') => {
    setSelectedServiceForRequest(serviceName || '');
    setRequestUrgency(urgency);
    setIsRequestModalOpen(true);
  };

  const handleOpenEmergency = () => {
    setIsEmergencyModalOpen(true);
  };

  const handleOpenEmergencyRequest = () => {
    setIsEmergencyModalOpen(false);
    handleOpenRequestService('24/7 Emergency Service', 'emergency');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-slate-950">
      
      {/* Top Navigation */}
      <Navbar
        onRequestService={() => handleOpenRequestService()}
        onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
        onOpenEmergency={handleOpenEmergency}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onRequestService={() => handleOpenRequestService()}
          onExploreServices={() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
        />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Company Overview Section */}
        <CompanyOverview
          onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
          onRequestService={() => handleOpenRequestService('Facility Assessment')}
        />

        {/* 4. Client & Industry Trust Section */}
        <ClientTrust />

        {/* 5. Comprehensive Services Grid & Trade Catalog */}
        <ServicesGrid
          onRequestService={(serviceName) => handleOpenRequestService(serviceName)}
          onSelectServiceDetail={(service) => setActiveServiceDetail(service)}
        />

        {/* 6. Why AX Now Section */}
        <WhyAxNow
          onRequestService={() => handleOpenRequestService()}
          onOpenEmergency={handleOpenEmergency}
        />

        {/* 7. Process Section */}
        <ProcessSection
          onRequestService={() => handleOpenRequestService()}
        />

        {/* 8. Regional & National Service Footprint */}
        <ServiceFootprint />

        {/* 9. Meet The Team */}
        <MeetTheTeam
          onOpenTeamModal={() => setIsTeamModalOpen(true)}
          onRequestService={() => handleOpenRequestService('Dedicated Technician Assignment')}
        />

        {/* 10. High-Impact Emergency Service Callout */}
        <EmergencyBanner
          onOpenEmergencyModal={handleOpenEmergency}
          onRequestEmergencyService={handleOpenEmergencyRequest}
        />

        {/* 11. Final Conversion CTA */}
        <FinalCTA
          onRequestService={() => handleOpenRequestService()}
          onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenCompanyProfile={() => setIsProfileModalOpen(true)}
        onRequestService={() => handleOpenRequestService()}
        onOpenTeamModal={() => setIsTeamModalOpen(true)}
        onOpenEmergency={handleOpenEmergency}
      />

      {/* Interactive Modals */}
      <RequestServiceModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        initialService={selectedServiceForRequest}
        initialUrgency={requestUrgency}
      />

      <CompanyProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onRequestService={() => handleOpenRequestService('Corporate Service Agreement')}
      />

      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        onRequestService={() => handleOpenRequestService('Field Operations Assignment')}
      />

      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onRequestEmergencyService={handleOpenEmergencyRequest}
      />

      <ServiceDetailModal
        service={activeServiceDetail}
        onClose={() => setActiveServiceDetail(null)}
        onRequestService={(name) => handleOpenRequestService(name)}
      />

    </div>
  );
}
