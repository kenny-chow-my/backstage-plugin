/*
 * Copyright 2022 Cortex Applications, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React from 'react';
import { Initiative } from '../../../api/types';
import { useRouteRef } from '@backstage/core-plugin-api';
import { initiativeRouteRef } from '../../../routes';
import { ListCard } from '../../ListCard';

type InitiativeCardProps = {
  initiative: Initiative;
};

export const InitiativeCard = ({ initiative }: InitiativeCardProps) => {
  const initiativeRef = useRouteRef(initiativeRouteRef);

  return (
    <ListCard
      name={initiative.name}
      creatorName={initiative.creator.name}
      description={initiative.description}
      url={initiativeRef({ id: `${initiative.id}` })}
    />
  );
};
