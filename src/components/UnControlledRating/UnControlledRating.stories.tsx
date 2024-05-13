import {action} from '@storybook/addon-actions';

import React, {useState} from 'react';
import {UnControlledRating} from './UnControlledRating';

export default {
    component: UnControlledRating,
};

export const Star0 = () => <UnControlledRating defaultValue={0} />
export const Star1 = () => <UnControlledRating defaultValue={1} />
export const Star2 = () => <UnControlledRating defaultValue={2} />
export const Star3 = () => <UnControlledRating defaultValue={3} />
export const Star4 = () => <UnControlledRating defaultValue={4} />
export const Star5 = () => <UnControlledRating defaultValue={5} />
export const ChangingRating = () => <UnControlledRating/>