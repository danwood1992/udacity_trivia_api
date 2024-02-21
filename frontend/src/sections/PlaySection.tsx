'use client'
import { Container } from '@/components/layout/Structures';
import  Pagination from '@/components/elements/CenteredPagination';
import React, { useState } from 'react';

interface NewPlaySectionProps {
    section_id: string;
    questionData: any;
}

export default function PlaySection({questionData, section_id}:NewPlaySectionProps) { 

return (


        <Container id={section_id}>
            <h1>+</h1>
            <Pagination />
        </Container>

      

)
};
