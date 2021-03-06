import { IFields, IFormProperties } from 'shared/types/models';
import { FieldValue } from 'shared/view/components/GenericInput/GenericInput';
import { IAction, IPlainFailAction, ICommunication } from 'shared/types/redux';

export interface IFlatFormProperties {
  [key: string]: string | number;
}

export interface IGeoPoint {
  lat: number;
  lng: number;
}

export interface ILocationProperties {
  [key: string]: IGeoPoint;
  from: IGeoPoint;
  to: IGeoPoint;
}

export interface IField {
  type: 'string' | 'integer';
  component: 'text' | 'integer' | 'radio' | 'dropdown' | 'location' | 'date' | 'time';
  order: number;
  label: string;
  pattern: string;
  placeholder: string;
  display: number;
  'enum': string[];
  minimum: number;
  maximum: number;
  minLength: number;
  maxLength: number;
}

export interface IReduxState {
  communication: {
    fetching: ICommunication;
  };
  data: {
    fields: IFields;
    values: IFormProperties;
  };
}

export type ILoadFields = IAction<'DYNAMIC_FIELDS:LOAD_FIELDS', number>;
export type ILoadFieldsSuccess = IAction<'DYNAMIC_FIELDS:LOAD_FIELDS_SUCCESS', IFields>;
export type ILoadFieldsFail = IPlainFailAction<'DYNAMIC_FIELDS:LOAD_FIELDS_FAIL'>;

export type IChangeFieldValueAction = IAction<'DYNAMIC_FIELDS:CHANGE_FIELD_VALUE', { name: string; value: FieldValue }>;

export type Action =
  | ILoadFields | ILoadFieldsSuccess | ILoadFieldsFail | IChangeFieldValueAction;
