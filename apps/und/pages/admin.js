import dynamic from 'next/dynamic';
const TinaAdmin = dynamic(() => import('tinacms').then((module) => module.TinaAdmin));

export function getStaticProps() {
    return {
      // returns the default 404 page with a status code of 404
      notFound: process.env.NODE_ENV === 'production'
    }
}

export default TinaAdmin;