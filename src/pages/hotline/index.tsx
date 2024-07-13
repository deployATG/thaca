import { Suspense } from 'react';
import LayoutMain from '@/layouts/Main';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ViewHotLine = dynamic(() => import('@/views/components/Nodata'), {
    ssr: false,
    suspense: true,
});

const HotLine = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ViewHotLine />
        </Suspense>
    );
}

HotLine.getLayout = (page: any) => {
    return (
        <>
            {page}
        </>
        // <LayoutMain>{page}</LayoutMain>    
);
}
export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "")),
        },
    }
}
export default HotLine;