'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { DataCurrentTabId, tabsData } from '@/utils/constants'
import NullReactFragment from './NullReactFragment'
import { motion, AnimatePresence } from "framer-motion";

const TabList = () => {

    let _currentTabId = DataCurrentTabId

    let _tabs = tabsData || null;

    const [currentTabId, setCurrentTabId] = useState<string>(_currentTabId)

    const handleTabsBtn = (currentId: string) => {
        setCurrentTabId(currentId)
    }

    if (_tabs.length <= 0) return <NullReactFragment />

    return (
        <div id='customTab' className='container'>
            <div id='customTabBtn' className='flex justify-center'>
                <div className='dark:bg-zinc-800 bg-slate-200 rounded-sm p-2 defaultShadow flex gap-2'>
                    {
                        _tabs.map((item) => (
                            <Button className='px-6' key={item.id} onClick={() => handleTabsBtn(item.name)} variant={
                                item.name == currentTabId ? "default" : "ghost"
                            }>{item.name}</Button>
                        ))
                    }
                </div>
            </div>
            <div id='customTabContent'>
                <AnimatePresence>
                    <motion.div
                        key={_currentTabId && currentTabId}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {
                            _tabs.map((item) => (
                                <React.Fragment key={item.id}>
                                    {item.name == currentTabId && <div className='py-10'>{item.component}</div>}
                                </React.Fragment>
                            ))
                        }
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default TabList