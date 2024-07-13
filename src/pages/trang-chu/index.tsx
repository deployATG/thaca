import { Suspense } from 'react';
import LayoutMain from '@/layouts/Main';
import dynamic from 'next/dynamic';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ViewHomeATG = dynamic(() => import('@/views/components/Nodata'), {
    ssr: false,
    suspense: true,
});

const HomeATG = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ViewHomeATG />
        </Suspense>
    );
}

HomeATG.getLayout = (page: any) => {
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
export default HomeATG;