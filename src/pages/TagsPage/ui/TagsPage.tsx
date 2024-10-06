import { useTranslation } from "react-i18next"


const TagsPage = () => {

    const {t} = useTranslation("tags");
  return (

    <div>{t("Tags Page")!}</div>
  )
}

export default TagsPage
