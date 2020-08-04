import React from 'react';
import { ChipField, Show, SingleFieldList, TextField, UrlField } from 'react-admin';
import ColumnShowLayout from '../../components/ColumnShowLayout';
import Column from '../../components/Column';
import Hero from '../../components/Hero';
import MarkDownField from '../../components/MarkdownField';
import UriArrayField from '../../components/UriArrayField';
import UserIcon from '../../components/UserIcon';
import GridList from '../../components/GridList';

const ProjectTitle = ({ record }) => {
  return <span>{record ? record.label : ''}</span>;
};

const ProjectShow = props => (
  <Show {...props}>
    <ColumnShowLayout>
      <Column xs={9}>
        <Hero title={<ProjectTitle />}>
          <TextField label="Courte description" source="comment" />
          <UrlField label="Site web" source="homePage" />
        </Hero>
        <MarkDownField source="description" addLabel />
      </Column>
      <Column xs={3} showLabel>
        <UriArrayField label="Géré par" reference="Organization" source="managedBy" referenceBasePath="/Organization">
          <SingleFieldList linkType="show">
            <ChipField source="label" color="secondary" />
          </SingleFieldList>
        </UriArrayField>
        <UriArrayField label="Responsables" reference="User" source="hasResponsible" referenceBasePath="/User">
          <GridList xs={6} linkType="show">
            <UserIcon />
          </GridList>
        </UriArrayField>
        <UriArrayField label="Participants" reference="User" source="involves" referenceBasePath="/User">
          <GridList xs={6} linkType="show">
            <UserIcon />
          </GridList>
        </UriArrayField>
      </Column>
    </ColumnShowLayout>
  </Show>
);

export default ProjectShow;
