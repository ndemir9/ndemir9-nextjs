'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { DataCurrentTabId, tabsData } from '@/utils/constants'

const TabList = () => {

    let _currentTabId = DataCurrentTabId

    let _tabs = tabsData || null;

    const [currentTabId, setCurrentTabId] = useState<string>(_currentTabId)

    const handleTabsBtn = (currentId: string) => {
        setCurrentTabId(currentId)
    }

    if (_tabs.length <= 0) return <></>

    return (
        <div id='customTab' className='container'>
            <div id='customTabBtn' className='flex justify-center'>
                <div className='bg-zinc-800 rounded-sm px-2 py-2 inline-block'>
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
                {
                    _tabs.map((item) => (
                        <React.Fragment key={item.id}>
                            {item.name == currentTabId && <div className='py-10'>{item.component}</div>}
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default TabList