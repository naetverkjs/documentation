import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: 'Modular',
        imageUrl: 'img/icons8-module-100.png',
        description: (
            <>
                With a Event-based architecture, it is easy to add new functionality in to a existing process.
            </>
        ),
    },
    {
        title: 'Flexible',
        imageUrl: 'img/icons8-toggle-on-100.png',
        description: (
            <>
                You can extend the existing functionality by creating new node and component types, connectors or
                sockets.
            </>
        ),
    },
    {
        title: 'Independant',
        imageUrl: 'img/icons8-puzzle-100.png',
        description: (
            <>
                Naetverk is not bound to a frontend framework. The base library can be used in any Framework that
                handles the rendering.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <div className={styles.iconCopyright}>
                    Icons by <a
                    target="_blank"
                    href="https://icons8.com">Icons8</a></div>
            </main>
        </Layout>
    );
}

export default Home;
