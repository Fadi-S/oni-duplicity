import React, {ReactNode, useState} from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    TransitionChild,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import NavItems from "@/nav-links";
import {Trans} from "react-i18next";
import {useSelector} from "react-redux";
import {hasSaveSelector} from "@/services/oni-save/selectors/save-game";
import {dlcIdSelector} from "@/services/oni-save/selectors/dlc";
import {Link} from "react-router-dom";
import Button from "@/components/Button";
import {ArrowDownTrayIcon} from "@heroicons/react/24/solid";
import {useSaveGame} from "@/services/oni-save/hooks/useSaveGame";
import Logo from "@/components/Logo";

export interface PageContainerProps {
    title: string;
    back?: boolean;
    children: ReactNode;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function PageContainer({title, back, children}: PageContainerProps) {
    const hasSave = useSelector(hasSaveSelector);
    const dlcId = useSelector(dlcIdSelector);

    const {disabled, onSave} = useSaveGame();

    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <div>
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                    />

                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
                        >
                            <TransitionChild>
                                <div
                                    className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                                    <button type="button" onClick={() => setSidebarOpen(false)}
                                            className="-m-2.5 p-2.5">
                                        <span className="sr-only">Close sidebar</span>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-white"/>
                                    </button>
                                </div>
                            </TransitionChild>
                            <div
                                className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                                <div className="flex h-16 shrink-0 items-center">
                                    <Logo className="h-8 w-auto"/>
                                </div>
                                <nav className="flex flex-1 flex-col">
                                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" className="-mx-2 space-y-1">
                                                {NavItems.map((item) => (
                                                    <li key={item.name}>
                                                        {item.saveRequired && !hasSave ? (
                                                            <span className="text-gray-600 cursor-not-allowed group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold">
                                                                <Trans i18nKey={item.i18nKey}>{item.name}</Trans>
                                                            </span>
                                                        ) : (
                                                            <Link
                                                                to={item.path}
                                                                className={classNames(
                                                                    item.path === window.location.pathname
                                                                        ? 'bg-gray-800 text-white'
                                                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                                )}
                                                            >
                                                                <Trans i18nKey={item.i18nKey}>{item.name}</Trans>
                                                            </Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>

                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            <Logo className="h-8 w-auto"/>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {NavItems.map((item) => (
                                            <li key={item.name}>
                                                {item.saveRequired && !hasSave ? (
                                                    <span
                                                        className="text-gray-600 cursor-not-allowed group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold">
                                                                <Trans i18nKey={item.i18nKey}>{item.name}</Trans>
                                                            </span>
                                                ) : (
                                                    <Link
                                                        to={item.path}
                                                        className={classNames(
                                                            item.path === window.location.pathname
                                                                ? 'bg-gray-800 text-white'
                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                                                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                        )}
                                                    >
                                                        <Trans i18nKey={item.i18nKey}>{item.name}</Trans>
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div
                        className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" onClick={() => setSidebarOpen(true)}
                                className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="size-6"/>
                        </button>

                        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden"/>

                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-xl font-medium">{title}</h2>
                            {!disabled && (
                                <Button disabled={disabled} onClick={onSave} icon={ArrowDownTrayIcon}>
                                    Save
                                </Button>
                            )}
                        </div>
                    </div>

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
