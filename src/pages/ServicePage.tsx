import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { services } from "@/data/servicesData";

const ServicePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { t } = useApp();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!id || !services[id]) {
        return <Navigate to="/" replace />;
    }

    const service = services[id];

    return (
        <div className="min-h-screen py-10 md:py-16">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm theme-text-muted mb-8 group cursor-pointer w-fit">
                    <Link to="/" className="hover:text-red-500 transition">{t("nav.allServices")}</Link>
                    <span>/</span>
                    <span className="theme-text font-medium">{t(service.titleKey)}</span>
                </div>

                {/* Title & Desc */}
                <div className="mb-12 md:mb-16 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{t(service.titleKey)}</h1>
                    <p className="theme-text-secondary text-base md:text-lg leading-relaxed">{t(service.descKey)}</p>
                </div>

                {/* Two Columns: Scope of Work and Advantages */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Column 1: Scope */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">{t("srv.scopeOfWork")}</h3>
                        <ul className="space-y-4">
                            {service.scopeKeys.map((key, i) => (
                                <li key={i} className="flex items-start gap-3 theme-text-secondary">
                                    <CheckIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>{t(key)}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <a href="tel:+48508796011" className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-lg shadow-red-600/20 text-sm md:text-base">
                                {t("srv.orderService")}
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Advantages */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">{t("srv.advantages")}</h3>
                        <ul className="space-y-4">
                            {service.advKeys.map((key, i) => (
                                <li key={i} className="flex items-start gap-3 theme-text-secondary">
                                    <CheckIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span>{t(key)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

const CheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default ServicePage;
