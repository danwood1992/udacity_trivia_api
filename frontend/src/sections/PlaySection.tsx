'use client'
import { Container, Section, Row, Column } from '@/components/layout/Structures';
import  Pagination from '@/components/elements/CenteredPagination';
import React, { useState } from 'react';

interface NewPlaySectionProps {
    section_id: string;
    questionData: any;
}

export default function PlaySection({questionData, section_id}:NewPlaySectionProps) { 

return (

    <Section >
        <Container className='grid grid-cols-1 md:grid-cols-2 gap-2' >       
                <div className="bg-green m-2 text-center p-6 rounded">Answer 1</div>
                <div className="bg-green m-2 text-center p-6">Answer 2</div>
                <div className="bg-green m-2 text-center p-6">Answer 1</div>
                <div className="bg-green m-2 text-center p-6">Answer 2</div>
              
        </Container>
    </Section>
        
    )
};