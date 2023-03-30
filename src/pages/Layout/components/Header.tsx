import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="container">
            <div className="border-neutral-medium-wave flex items-center border-b pt-6 pb-4">
                <h1 className="text-neutral-dark-city text-2xl font-semibold">
                    {t('header.title')}
                </h1>
                <div className="text-neutral-medium-cloud ml-2 cursor-help pt-2">
                    <bds-tooltip
                        position="right-center"
                        tooltip-text={t('header.information')}
                    >
                        <bds-icon name="info" theme="solid" />
                    </bds-tooltip>
                </div>
            </div>
        </header>
    );
};

export default Header;
