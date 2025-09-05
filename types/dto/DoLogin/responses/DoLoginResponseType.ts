import { OrganizationType } from '../../../entities/OrganizationType';

export interface DoLoginResponseType {
  token: string;
  userId: number;
  organizations: OrganizationType[];
}
