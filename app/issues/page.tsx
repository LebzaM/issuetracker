'use client';
import React from 'react';
import { TextField, TextArea, Button } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import {useForm, Controller} from 'react-hook-form'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import SimpleMDE from 'react-simplemde-editor';

const IssuePage = () => {

  return (
    <form
      className="space-y-0 h-[50%] w-[100%] flex justify-center  flex-col"
      
    >
     <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Description" />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default IssuePage;
