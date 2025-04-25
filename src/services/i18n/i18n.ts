import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import {isProd} from "@/runtime-env";

// TODO: Use backends to save on file space
//  Deferring until I get a chance to focus on splitting the bundles.
// import Backend from "i18next-xhr-backend";

import csCommon from '@/translations/cs/common.json';
import csOni from '@/translations/cs/oni.json';
import enCommon from '@/translations/en/common.json';
import enOni from '@/translations/en/oni.json';
import esCommon from '@/translations/es/common.json';
import esOni from '@/translations/es/oni.json';
import ruCommon from '@/translations/ru/common.json';
import zhCommon from '@/translations/zh/common.json';
import zhOni from '@/translations/zh/oni.json';

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',

        ns: ['common', 'oni'],
        defaultNS: 'common',

        resources: {
            cs: {common: csCommon, oni: csOni},
            en: {common: enCommon, oni: enOni},
            es: {common: esCommon, oni: esOni},
            ru: {common: ruCommon},
            zh: {common: zhCommon, oni: zhOni},
        },

        debug: !isProd,
        interpolation: {escapeValue: false},
        react: {},
    }, () => null);

export default i18n;