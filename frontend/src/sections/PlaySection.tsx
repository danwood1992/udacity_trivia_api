'use client'
import { Container, Section, Row, Column } from '@/components/layout/Structures';
import  Pagination from '@/components/elements/CenteredPagination';
import React, { useState } from 'react';
import Answer from '@/components/elements/Answer';

interface NewPlaySectionProps {
    section_id: string;
    questionData: any;
}

export default function PlaySection({questionData, section_id}:NewPlaySectionProps) { 

return (

    <Section >
        <Container className='grid grid-cols-1 md:grid-cols-2 gap-2' >       
                <Answer answer="Answer 1"/>
                <Answer answer="Answer 2"/>
                <Answer answer="Answer 3"/>
                <Answer answer="Answer 4"/>   
        </Container>
    </Section>
        
    )
};