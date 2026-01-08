import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();
    return (
        <div className="py-5 text-center">
            <h1>{t('welcome')}</h1>
            <p className="lead">{t('tagline')}</p>
            {/* You can add a Hero image or a Countdown timer here later */}
        </div>
    );
}
export default Home;