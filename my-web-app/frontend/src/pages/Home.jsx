import { useTranslation } from 'react-i18next';
import ImageUpload from '../components/Layout/ImageUpload';
import ImageGrid from '../components/Layout/ImageGrid';

function Home() {
    const { t } = useTranslation();
    return (
        <div className="py-5 text-center">
            <h1>{t('welcome')}</h1>
            <p className="lead">{t('tagline')}</p>
            <ImageUpload />
            <ImageGrid />
        </div>
    );
}
export default Home;