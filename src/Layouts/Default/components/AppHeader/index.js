import React from "react"
import LogoIcon from "components/Icons/Logo"
import ListBare from "components/ListBare"
import PatientsIcon from "components/Icons/Patients"
import ProfessionalsIcon from "components/Icons/Professionals"
import VisitationsIcon from "components/Icons/Visitations"
import AnalyticsIcon from "components/Icons/Analytics"
import { TextIcon } from "components/Flag"
import { activeLink, navIcon, navLinkPrimary, navLinkSecondary } from "./styles"
import { Link, NavLink } from "react-router-dom"

function AppHeader() {
  return (
    <div className="c-app-header c__app-header--desktop u-hide u-show-desktop">
      <div className="u-padding-small u-margin-bottom-large">
        <Link to="/" title="Frontidapp">
          <LogoIcon />
        </Link>
      </div>
      <nav>
        <h2 className="u-hidden-visually">Navigation</h2>
        <div className="u-padding-left-small">
          <h3 className="c-label c-label--small">Pages</h3>
        </div>
        <div className="u-margin-bottom-large">
          <ListBare>
            <li>
              <NavLink
                to="/patients"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<PatientsIcon className={navIcon} />}>
                    patients
                  </TextIcon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/professionals"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<ProfessionalsIcon className={navIcon} />}>
                    professionals
                  </TextIcon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/visitations"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<VisitationsIcon className={navIcon} />}>
                    visitations
                  </TextIcon>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/analytics"
                activeClassName={activeLink}
                className={navLinkPrimary}>
                <div className="u-padding-vertical-small u-padding-left-small">
                  <TextIcon icon={<AnalyticsIcon className={navIcon} />}>
                    Analytics
                  </TextIcon>
                </div>
              </NavLink>
            </li>
          </ListBare>
        </div>
        <div className="u-padding-left-small">
          <h3 className="c-label c-label--small">Actions</h3>
        </div>
        <ListBare>
          <li>
            <NavLink
              to="/patients/create-new"
              activeClassName={activeLink}
              className={navLinkSecondary}>
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon
                  icon={
                    <PatientsIcon type={"secondary"} className={navIcon} />
                  }>
                  Patients
                </TextIcon>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/professionals/create-new"
              activeClassName={activeLink}
              className={navLinkSecondary}>
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon
                  icon={
                    <ProfessionalsIcon type={"secondary"} className={navIcon} />
                  }>
                  Professionals
                </TextIcon>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visitations/create-new"
              activeClassName={activeLink}
              className={navLinkSecondary}>
              <div className="u-padding-vertical-small u-padding-left-small">
                <TextIcon
                  icon={
                    <VisitationsIcon type={"secondary"} className={navIcon} />
                  }>
                  visitations
                </TextIcon>
              </div>
            </NavLink>
          </li>
        </ListBare>
      </nav>
    </div>
  )
}

export default AppHeader
