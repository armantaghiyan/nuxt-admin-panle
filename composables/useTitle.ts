export function useTitle(title?: string) {
    const {t} = useI18n();

    if(title){
        title = ' | ' + title;
    }

    useSeoMeta({
        title: t('app_name')+ (title??''),
    })
}