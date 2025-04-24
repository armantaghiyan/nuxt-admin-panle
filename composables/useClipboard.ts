export const useClipboard = () => {
    const {t} = useI18n();

    const copyToClipboard = async (text: string | number)  => {
        try {
            await navigator.clipboard.writeText(text.toString())
            toast(t('global.copy_message'));
        } catch (error) {
            errorToast(t('global.copy_failed'));
        }
    }

    return {copyToClipboard}
}