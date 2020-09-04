import React from "react"
import Button from "components/Button/index"
import { ul, li, dls, dts, dds, wrapper, paddingBot, h3, h2 } from "./style"
import { UserType } from "types"
import { useI18n } from "providers/I18n"

const Information = ({ birthDate, profession, createdDate }) => {
  const { t } = useI18n()
  const personalInfo = [
    {
      name: t("int.dateOfBirth"),
      value: birthDate
    },
    {
      name: t("int.profession"),
      value: profession
    },
    {
      name: t("int.contactNumber"),
      value: "6954823581"
    }
  ]

  const additionalInfo = [
    {
      name: t("int.registered"),
      value: createdDate
    },
    {
      name: t("int.status"),
      value: "Active"
    }
  ]
  return (
    <div className={wrapper}>
      <header className={paddingBot}>
        <h2 className={h2}>{t("int.information")}</h2>
        <div>
          <Button ghost variant="secondary">
            {t("int.edit_information")}
          </Button>
        </div>
      </header>
      <h3 className={h3}>{t("int.personal_information")}</h3>
      <ul className={ul}>
        {personalInfo.map((item, i) => (
          <li key={i} className={li}>
            <dl className={dls}>
              <dt className={dts}>{item.name}</dt>
              <dd className={dds}>{item.value}</dd>
            </dl>
          </li>
        ))}
      </ul>
      <h3 className={h3}>{t("int.additional_information")}</h3>
      <ul className={ul}>
        {additionalInfo.map((item, i) => (
          <li key={i} className={li}>
            <dl className={dls}>
              <dt className={dts}>{item.name}</dt>
              <dd className={dds}>{item.value}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

Information.propTypes = UserType

export default Information
