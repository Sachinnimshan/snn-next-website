import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CommercialProject, Project } from '../types/projects';
import baseURL from '../utils/config';
import { HTTP_VERBS } from '../utils/httpVerbs';
import type { Experience } from '../types/experience';
import type { Education } from '../types/education';
import type { Certificate } from '../types/certificate';
import type { Skill } from '../types/skill';


export interface ContactPayload {
    name: string;
    email: string;
    message: string;
}

export const webApiSlice = createApi({
    reducerPath: 'webApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getProjectList: builder.query<Project[], void>({
            query: () => ({
                url: '/projects',
                method: HTTP_VERBS.GET,
            }),
            keepUnusedDataFor: 600,

        }),
        getProjectDetails: builder.query<Project, string>({
            query: (id) => ({
                url: `/projects/${id}`,
                method: HTTP_VERBS.GET,
            }),
            keepUnusedDataFor: 600,
        }),
        getExperienceList: builder.query<Experience[], void>({
            query: () => ({
                url: '/experience',
                method: HTTP_VERBS.GET,
            }),
            keepUnusedDataFor: 600,
        }),
        getAcademicList: builder.query<Education[], void>({
            query: () => ({
                url: '/education',
                method: HTTP_VERBS.GET,
            }),
            keepUnusedDataFor: 600,
        }),
        postContact: builder.mutation<void, ContactPayload>({
            query: (payload) => ({
                url: '/contact',
                method: HTTP_VERBS.POST,
                body: payload,
            }),
        }),
        getCertificationList: builder.query<Certificate[], void>({
            query: () => ({
                url: '/certifications',
                method: HTTP_VERBS.GET,
            }),
            keepUnusedDataFor: 600,
        }),
        getIndustryProjectList: builder.query<CommercialProject[], void>({
            query: () => ({
                url: '/industryprojects',
                method: HTTP_VERBS.GET,
            }),
            keepUnusedDataFor: 600,
        }),
        getSkillList: builder.query<Skill[], void>({
            query: () => ({
                url: '/skills',
                method: HTTP_VERBS.GET,
            }),
            keepUnusedDataFor: 600,
        }),
    }),
});

export const {
    useLazyGetProjectListQuery,
    useLazyGetIndustryProjectListQuery,
    useGetProjectDetailsQuery,
    useGetExperienceListQuery,
    useGetAcademicListQuery,
    useGetCertificationListQuery,
    usePostContactMutation,
    useGetSkillListQuery
} = webApiSlice;
