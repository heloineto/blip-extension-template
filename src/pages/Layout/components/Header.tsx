import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="mx-auto px-4 sm:px-4 lg:mx-11">
            <div className="border-neutral-medium-wave flex items-center justify-between border-b pt-6 pb-4 md:justify-start md:space-x-3">
                <div className="flex items-center justify-start lg:w-0 lg:flex-1">
                    <h1 className="text-neutral-dark-city text-2xl font-semibold">
                        {t('header.title')}
                    </h1>
                    <div
                        className="text-neutral-medium-cloud ml-2 cursor-help pt-2"
                        data-testid="page-header-tooltip"
                    >
                        <bds-tooltip
                            position="right-center"
                            tooltip-text="Blip extension it's a technology-agnostic way to plug unofficial features to enhance the portal capabilities."
                        >
                            <bds-icon name="info" theme="solid">
                                Hover me
                            </bds-icon>
                        </bds-tooltip>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
