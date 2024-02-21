'use client'
import { Section, ResponsiveContainer, FlexContainer } from '@/components/layout/Structures';
import React, { useState } from 'react';
import { Button } from '../elements/Button';
import Timer from '@/components/blocks/Timer';
import { getQuestions } from '@/queries/getQuestions';
import QuestionBlock from '@/components/blocks/QuestionBlock';

export default function NewPlaySection() { 



  
return (
<Section>
<ResponsiveContainer>
<FlexContainer items='center' justify='center'>
<h1>New play section</h1>
</FlexContainer>
</ResponsiveContainer>
</Section>
)
};
