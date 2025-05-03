import { useTranslation } from 'react-i18next';
import PageContainer from '@/components/PageContainer';
import React from "react";

const DuplicantNotFound = () => {
    const { t } = useTranslation();

    return (
        <PageContainer title={t('duplicant.conditions.missing_titlecase')} back>
            <div className="flex w-full h-full">
                <h2 className="mx-auto mt-4 text-xl font-semibold">
                    {t('duplicant.conditions.missing_titlecase')}
                </h2>
            </div>
        </PageContainer>
    );
};

export default DuplicantNotFound;