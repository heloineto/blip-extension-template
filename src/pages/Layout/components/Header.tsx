import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="border-neutral-medium-wave flex items-center border-b pb-4 pt-6">
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
        </header>
    );
};

export default Header;
