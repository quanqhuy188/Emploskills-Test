import {CREATE_API,EDIT_API,DELETE_API,GET_ALL_API} from "@/constants/ApiConstant";
import { mutate } from 'swr';

export const createProject = async (data: { title: string; status: string; pictureURL: string }) => {
    try {
      const response = await fetch(CREATE_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      mutate(GET_ALL_API)
      return response;
    } catch (error) {
      throw error;
    }
  };
  export const updateProject = async (data: {id:string, title: string; status: string; pictureURL: string }) => {
    try {
      const response = await fetch(EDIT_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      mutate(GET_ALL_API)
      return response;
    } catch (error) {
      throw error;
    }
  };
  
  export const deleteProject = async (id: string) => {
    try {
      const response = await fetch(`${DELETE_API}/?id=${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`Response status: ${response.status}`);
      mutate(GET_ALL_API)
      return response;
    } catch (error) {
      throw error;
    }
  };