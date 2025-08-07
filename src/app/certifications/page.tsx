"use client";
import React from "react";
import { useGetCertificationListQuery } from "@/api/webApiSlice";
import CertificationCard from "@/components/certification-card/CertificationCard";
import Loader from "@/components/loader/Loader";
import PageWrapper from "@/components/page-wrapper/PageWrapper";

const CertificationsPage = () => {
  const { data, isLoading } = useGetCertificationListQuery();
  return (
    <PageWrapper
      title="Certifications"
      description="Explore my certifications in web development and digital marketing."
    >
      {isLoading ? (
        <Loader loading={isLoading} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((cert, idx) => (
            <CertificationCard key={idx} certificate={cert} idx={idx} />
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export default CertificationsPage;
