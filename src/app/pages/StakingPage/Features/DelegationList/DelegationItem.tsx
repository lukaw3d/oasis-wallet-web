import { ReclaimEscrowForm } from 'app/components/ReclaimEscrowForm'
import { DebondingDelegation, Delegation, ValidatorDetails } from 'app/state/staking/types'
import { Box } from 'grommet'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { ValidatorInformations } from '../ValidatorList/ValidatorInformations'

interface DelegationProps {
  data: Delegation | DebondingDelegation
  validatorDetails: ValidatorDetails | null
  canReclaim: boolean
}

export const DelegationItem = memo((props: DelegationProps) => {
  const { t } = useTranslation()
  const delegation = props.data
  const validator = props.data.validator
  const canReclaim = props.canReclaim
  const details = props.validatorDetails

  return (
    <Box pad="medium" background="background-contrast" data-testid="validator-item">
      {validator && <ValidatorInformations validator={validator} details={details} />}
      {!validator && <>{t('validator.unknownValidator', 'Unknown validator')}</>}
      {canReclaim && (
        <ReclaimEscrowForm
          address={delegation.validatorAddress}
          maxAmount={delegation.amount}
          maxShares={delegation.shares}
        />
      )}
    </Box>
  )
})
