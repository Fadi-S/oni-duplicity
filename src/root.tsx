import * as React from "react";
import I18NProvider from "@/services/i18n/components/I18NProvider";
import Routes from "@/routes";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "@/store/store";
import PageContainer from "@/components/PageContainer";

const Root: React.FC = () => (
    <I18NProvider>
        <Provider store={store}>
                <BrowserRouter>
                    <PageContainer title="Duplicity">
                        <Routes />
                    </PageContainer>
                </BrowserRouter>
        </Provider>
    </I18NProvider>
);

export default Root;
