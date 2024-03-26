import React from 'react'
import './profile.css'

import { I_profileProps, T_role } from '../../../../../types/types';

import Blank from '../../../../../images/team_profiles/blank.jpg'
import LinkIcons from '../../../../../components/link_icons/link_icons'
import ImageErrorBoundary from '../../../../../components/image/image_error_boundary'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props: I_profileProps) {

  const role: T_role | undefined = props.roles.find((role: T_role) => role.team === props.team)
  const isFounder = props.email === 'jd2099@bath.ac.uk' || props.email === 'tm907@bath.ac.uk'

  return (
    <div className='team-profile'>
      <input
        type='checkbox'
        name='team-profile'
        id={props.index.toString()}
        checked={props.isSelected}
        onChange={() => props.handleSelection(props.index)}
      />
      <label
        className='foreground'
        htmlFor={props.index.toString()}
        style={{ backgroundColor: props.isLead && !props.isLegacy ? '#094e4d' : 'white' }}
      >
        <div className='team-profile-image'>
          <ImageErrorBoundary
            image={props.image}
            fallbackImage={Blank}
          />
          <div
            className='founder-badge'
            style={{visibility: isFounder ? 'visible' : 'hidden' }}
          >
            <FontAwesomeIcon icon={faStar} />
            Founder
          </div>
        </div>
        <div className='team-profile-details'>
          <span className='team-profile-text'>
            <p className='member-name' style={{
              color: props.isLead && !props.isLegacy ? 'white' : 'black'
            }}>{props.name}</p>
            <p style={{
              color: props.isLead && !props.isLegacy ? 'white' : 'black'
            }}>{role?.role}</p>
            <p style={{
              color: props.isLead && !props.isLegacy ? 'white' : 'black'
            }}>{props.course}</p>
          </span>
          <LinkIcons link={props.link} darkMode={props.isLead && !props.isLegacy} />
        </div>
      </label>
      <label
        htmlFor={props.index.toString()}
        className="legacy-overlay"
        style={{
          display: props.isLegacy ? 'block' : 'none'
        }}
      >
      </label>
    </div>
  )
}
