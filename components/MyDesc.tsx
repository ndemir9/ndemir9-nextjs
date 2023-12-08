'use client'
import React, { useState } from 'react';
import { Button } from './ui/button';
import { DataMyDesc } from '@/utils/constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from "framer-motion"
import NullReactFragment from './NullReactFragment';

const MyDesc = () => {
    let desc = DataMyDesc;

    let [isTruncate, setIsTruncate] = useState(true);
    let [readMoreBtnText, setReadMoreBtnText] = useState("read more");

    const handleReadMoreBtn = () => {
        setIsTruncate(!isTruncate);
        setReadMoreBtnText(isTruncate ? "read less" : "read more");
    };

    if (!desc) return <NullReactFragment />

    return (
        <div className='container mb-4'>
            <p
                id='mydesc'
                className={`width-[94%] max-w-[768px] 
                ${isTruncate && 'truncate'}`}
                dangerouslySetInnerHTML={{ __html: desc }}
            />
            <Button variant="link" className='p-0 flex items-center' onClick={() => handleReadMoreBtn()}>
                {readMoreBtnText}
                {isTruncate ? <ChevronDown /> : <ChevronUp />}
            </Button>
        </div>
    );
};

export default MyDesc;
