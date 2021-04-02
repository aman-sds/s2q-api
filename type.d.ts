declare namespace Components {
    namespace Schemas {
        export interface BaseCollectionMetaResponse {
            count: number;
        }
        export interface CheckCodeDto {
            code: string;
        }
        export interface CheckTokenDto {
            token: string;
        }
        export interface CompanyCollection {
            meta: BaseCollectionMetaResponse;
            data: CompanyDto[];
        }
        export interface CompanyDto {
            id: string; // uuid
            createdAt: string; // date-time
            updatedAt: string; // date-time
            email: string;
            name: string;
            maxEmployees: number;
            status: "inactive" | "active" | "blocked";
            domain: string;
            currentEmployees: number;
        }
        export interface CostCollection {
            meta: BaseCollectionMetaResponse;
            data: number[][];
            zones: ZoneDto[];
        }
        export interface CreateCompanyDto {
            email: string;
            name: string;
            maxEmployees: number;
            domain: string;
        }
        export interface CreateEquipmentDto {
            name: string;
            description?: string;
            template?: string;
            isDefault?: boolean;
        }
        export interface CreateUserDto {
            email: string;
            firstName?: string;
            lastName?: string;
            role?: "admin" | "manager" | "worker";
        }
        export interface CreateZoneDto {
            name: string;
            description?: string;
            zipCodes: string[];
        }
        export interface CredentialsDto {
            email: string;
            password: string;
        }
        export interface EquipmentCollection {
            meta: BaseCollectionMetaResponse;
            data: EquipmentDto[];
        }
        export interface EquipmentDto {
            id: string; // uuid
            createdAt: string; // date-time
            updatedAt: string; // date-time
            name: string;
            description?: string;
            template?: string;
            isDefault?: boolean;
        }
        export interface FrontAppApiTokenSaveDto {
            apitoken?: unknown;
            frontappAuthtoken?: unknown;
            companyid?: unknown;
            teammateid: unknown;
            id: unknown;
        }
        export interface FrontAppMessage {
            conversationid: unknown;
            frontappauthtoken: unknown;
            text: unknown;
            username: unknown;
        }
        export interface FrontappUpdatetokne {
            apitoken?: unknown;
            frontappAuthtoken?: unknown;
            companyid?: unknown;
            id: unknown;
        }
        export interface IRawMessages {
        }
        export interface InboxMailCollection {
            meta: BaseCollectionMetaResponse;
            data: InboxMailDto[];
        }
        export interface InboxMailDto {
            id: string; // uuid
            createdAt: string; // date-time
            updatedAt: string; // date-time
            email: string;
            subject?: string;
            zipCodeFrom?: string;
            zipCodeTo?: string;
            locationFrom?: string;
            locationTo?: string;
            distance?: number;
            weight?: number;
            state?: "new" | "ignored" | "answered";
            responseState?: "none" | "sending" | "sent" | "error";
            responseError?: string;
            originalMail: string;
            cost?: number;
            costPerMile?: number;
            openTime?: string; // date-time
            responseTime?: string; // date-time
            user?: UserDto;
            equipment?: EquipmentDto;
            dimension?: string;
            response?: string;
            emailsTotal?: number;
            emailListPosition?: number;
            mailData?: MailDataDto;
        }
        export interface InviteUserDto {
            token: string;
            password: string;
            firstName: string;
            lastName: string;
        }
        export interface MailDataDto {
            locationFrom?: string;
            locationTo?: string;
            weight?: number;
            distance?: number;
            costPerMile?: number;
            cost?: number;
            equipment?: EquipmentDto;
        }
        export interface PasswordForgotDto {
            email: string;
        }
        export interface PasswordRecoveryDto {
            code: string;
            password: string;
        }
        export interface RebuildInboxMailDto {
            equipmentId: string;
            locationFrom?: string;
            locationTo?: string;
            weight?: number;
            distance?: number;
            costPerMile?: number;
        }
        export interface RefreshTokenDto {
            refreshToken: string;
        }
        export interface StatisticDto {
            id: string; // uuid
            createdAt: string; // date-time
            updatedAt: string; // date-time
            total: string;
            answered: string;
            ignored: string;
            fullParsed: string;
            partialParsed: string;
            notParsed: string;
            processed: string;
            avgSpeed: string;
            fromList: string;
            adjusted: string;
        }
        export interface TokenPairPayloadDto {
            access: TokenPayloadDto;
            refresh: TokenPayloadDto;
        }
        export interface TokenPayloadDto {
            id: string;
            token: string;
            userId: string;
            issuedAt: number;
            expiredAt: number;
        }
        export interface UpdateCompanyDto {
            name?: string;
            maxEmployees?: number;
            status?: "inactive" | "active" | "blocked";
        }
        export interface UpdateCostDto {
            data: number[][];
            zones: ZoneDto[];
        }
        export interface UpdateEmployeeDto {
            role?: "admin" | "manager" | "worker";
            status?: "inactive" | "active" | "blocked";
        }
        export interface UpdateEquipmentDto {
            name?: string;
            description?: string;
            template?: string;
            isDefault?: boolean;
        }
        export interface UpdateInboxMailDataDto {
            equipmentId?: string;
            locationFrom?: string;
            locationTo?: string;
            weight?: number;
            distance?: number;
            costPerMile?: number;
            cost?: number;
        }
        export interface UpdateInboxMailDto {
            body?: string;
            template?: string;
            state: "new" | "ignored" | "answered";
            mailData?: UpdateInboxMailDataDto;
        }
        export interface UpdateUserDto {
            firstName?: string;
            lastName?: string;
            password?: string;
            oldPassword?: string;
            accountEmail?: string;
            accountPassword?: string;
            imapHost?: string;
            imapPort?: number;
            imapTls?: boolean;
            smtpHost?: string;
            smtpPort?: number;
            smtpSsl?: boolean;
            smtpTimeStamp?: string; // date-time
            registrationComplete?: boolean;
            role?: "admin" | "manager" | "worker";
            status?: "inactive" | "active" | "blocked";
        }
        export interface UpdateZoneDto {
            name?: string;
            description?: string;
            zipCodes?: string[];
        }
        export interface UserCollection {
            meta: BaseCollectionMetaResponse;
            data: UserDto[];
        }
        export interface UserDto {
            id: string; // uuid
            createdAt: string; // date-time
            updatedAt: string; // date-time
            email: string;
            status: "inactive" | "active" | "blocked";
            firstName?: string;
            lastName?: string;
            role: "admin" | "manager" | "worker";
            emailLoginType: "google" | "outlook" | "custom" | "none";
            company?: CompanyDto;
            accountEmail?: string;
            imapHost?: string;
            imapPort?: number;
            imapTls?: boolean;
            smtpHost?: string;
            smtpPort?: number;
            smtpSsl?: boolean;
            registrationComplete: boolean;
            isMailConfigured: boolean;
            tokenEmail?: string;
            AccessToken?: string;
        }
        export interface UserEntity {
        }
        export interface ZoneCollection {
            meta: BaseCollectionMetaResponse;
            data: ZoneDto[];
        }
        export interface ZoneDto {
            id: string; // uuid
            createdAt: string; // date-time
            updatedAt: string; // date-time
            name: string;
            description?: string;
            zipCodes?: string[];
        }
    }
}
declare namespace Paths {
    namespace AuthControllerEmailLogout {
        namespace Responses {
            export type $200 = Components.Schemas.UserDto;
            export interface $401 {
            }
        }
    }
    namespace AuthControllerGoogleAuth {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AuthControllerGoogleAuthRedirect {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AuthControllerOutlookAuth {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AuthControllerOutlookAuthRedirect {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace AuthControllerUserLogin {
        export type RequestBody = Components.Schemas.CredentialsDto;
        namespace Responses {
            export type $200 = Components.Schemas.TokenPairPayloadDto;
            export interface $403 {
            }
            export interface $406 {
            }
        }
    }
    namespace AuthControllerUserLogout {
        namespace Responses {
            export interface $204 {
            }
            export interface $401 {
            }
        }
    }
    namespace AuthControllerUserRefreshTokenPair {
        export type RequestBody = Components.Schemas.RefreshTokenDto;
        namespace Responses {
            export type $200 = Components.Schemas.TokenPairPayloadDto;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace CompanyControllerCreate {
        export type RequestBody = Components.Schemas.CreateCompanyDto;
        namespace Responses {
            export type $201 = Components.Schemas.CompanyDto;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace CompanyControllerDelete {
        namespace Parameters {
            export type CompanyId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace CompanyControllerFind {
        namespace Parameters {
            export type Domain = string;
        }
        export interface PathParameters {
            domain: Parameters.Domain;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CompanyDto;
            export interface $404 {
            }
        }
    }
    namespace CompanyControllerGet {
        namespace Parameters {
            export type CompanyId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CompanyDto;
            export interface $401 {
            }
            export interface $404 {
            }
        }
    }
    namespace CompanyControllerInvite {
        namespace Parameters {
            export type CompanyId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserDto;
            export interface $403 {
            }
            export interface $422 {
            }
        }
    }
    namespace CompanyControllerList {
        namespace Parameters {
            export type Limit = number;
            export type Offset = number;
            export type OrderDirection = "ASC" | "DESC";
            export type OrderField = string;
            export type Search = string;
        }
        export interface QueryParameters {
            offset?: Parameters.Offset;
            limit?: Parameters.Limit;
            orderField?: Parameters.OrderField;
            orderDirection?: Parameters.OrderDirection;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CompanyCollection;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace CompanyControllerUpdate {
        namespace Parameters {
            export type CompanyId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        export type RequestBody = Components.Schemas.UpdateCompanyDto;
        namespace Responses {
            export type $200 = Components.Schemas.CompanyDto;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace EquipmentControllerCreate {
        namespace Parameters {
            export type CompanyId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        export type RequestBody = Components.Schemas.CreateEquipmentDto;
        namespace Responses {
            export type $201 = Components.Schemas.EquipmentDto;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace EquipmentControllerDelete {
        namespace Parameters {
            export type CompanyId = string;
            export type EquipmentId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            equipmentId: Parameters.EquipmentId;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace EquipmentControllerGet {
        namespace Parameters {
            export type CompanyId = string;
            export type EquipmentId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            equipmentId: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.EquipmentDto;
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace EquipmentControllerGetCosts {
        namespace Parameters {
            export type CompanyId = string;
            export type EquipmentId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            equipmentId: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.CostCollection;
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace EquipmentControllerList {
        namespace Parameters {
            export type CompanyId = string;
            export type Limit = number;
            export type Offset = number;
            export type OrderDirection = "ASC" | "DESC";
            export type OrderField = string;
            export type Search = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        export interface QueryParameters {
            offset?: Parameters.Offset;
            limit?: Parameters.Limit;
            orderField?: Parameters.OrderField;
            orderDirection?: Parameters.OrderDirection;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.EquipmentCollection;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace EquipmentControllerUpdate {
        namespace Parameters {
            export type CompanyId = string;
            export type EquipmentId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            equipmentId: Parameters.EquipmentId;
        }
        export type RequestBody = Components.Schemas.UpdateEquipmentDto;
        namespace Responses {
            export type $200 = Components.Schemas.EquipmentDto;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace EquipmentControllerUpdateCosts {
        namespace Parameters {
            export type CompanyId = string;
            export type EquipmentId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            equipmentId: Parameters.EquipmentId;
        }
        export type RequestBody = Components.Schemas.UpdateCostDto;
        namespace Responses {
            export type $200 = Components.Schemas.CostCollection;
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace ErrorTestingControllerGenerateDbError {
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace ErrorTestingControllerGenerateInternalServerError {
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace FrontAppControllerGetEquipment {
        namespace Parameters {
            export type Limit = number;
            export type Offset = number;
            export type OrderDirection = "ASC" | "DESC";
            export type OrderField = string;
            export type Search = string;
        }
        export interface QueryParameters {
            offset?: Parameters.Offset;
            limit?: Parameters.Limit;
            orderField?: Parameters.OrderField;
            orderDirection?: Parameters.OrderDirection;
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace FrontAppControllerGetandPase {
        export type RequestBody = Components.Schemas.IRawMessages;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerListtoken {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace FrontAppControllerRebuild {
        export type RequestBody = Components.Schemas.RebuildInboxMailDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSendEmail {
        export type RequestBody = Components.Schemas.FrontAppMessage;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerStoreApi {
        export type RequestBody = Components.Schemas.FrontAppApiTokenSaveDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerUpdateToken {
        export type RequestBody = Components.Schemas.FrontappUpdatetokne;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace FrontappAuthControllerGet {
        namespace Responses {
            export type $200 = Components.Schemas.UserDto;
            export interface $401 {
            }
            export interface $404 {
            }
        }
    }
    namespace FrontappAuthControllerSignin {
        export type RequestBody = Components.Schemas.CredentialsDto;
        namespace Responses {
            export type $200 = Components.Schemas.TokenPairPayloadDto;
            export interface $403 {
            }
            export interface $406 {
            }
        }
    }
    namespace HealthControllerCheckHealth {
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace InboxMailControllerDelete {
        namespace Parameters {
            export type MailId = string;
        }
        export interface PathParameters {
            mailId: Parameters.MailId;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace InboxMailControllerGetList {
        namespace Parameters {
            export type Employees = string[];
            export type Limit = number;
            export type Offset = number;
            export type OrderDirection = "ASC" | "DESC";
            export type OrderField = string;
            export type States = ("new" | "ignored" | "answered")[];
        }
        export interface QueryParameters {
            offset?: Parameters.Offset;
            limit?: Parameters.Limit;
            orderField?: Parameters.OrderField;
            orderDirection?: Parameters.OrderDirection;
            employees?: Parameters.Employees;
            states?: Parameters.States;
        }
        namespace Responses {
            export type $200 = Components.Schemas.InboxMailCollection;
        }
    }
    namespace InboxMailControllerGetNext {
        namespace Parameters {
            export type MailId = string;
        }
        export interface PathParameters {
            mailId: Parameters.MailId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.InboxMailDto;
            export interface $404 {
            }
        }
    }
    namespace InboxMailControllerGetOne {
        namespace Parameters {
            export type MailId = string;
        }
        export interface PathParameters {
            mailId: Parameters.MailId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.InboxMailDto;
            export interface $404 {
            }
        }
    }
    namespace InboxMailControllerRebuild {
        namespace Parameters {
            export type MailId = string;
        }
        export interface PathParameters {
            mailId: Parameters.MailId;
        }
        export type RequestBody = Components.Schemas.RebuildInboxMailDto;
        namespace Responses {
            export type $200 = Components.Schemas.InboxMailDto;
            export interface $404 {
            }
        }
    }
    namespace InboxMailControllerUpdate {
        namespace Parameters {
            export type MailId = string;
        }
        export interface PathParameters {
            mailId: Parameters.MailId;
        }
        export type RequestBody = Components.Schemas.UpdateInboxMailDto;
        namespace Responses {
            export type $200 = Components.Schemas.InboxMailDto;
        }
    }
    namespace PasswordRecoveryControllerCheckCode {
        export type RequestBody = Components.Schemas.CheckCodeDto;
        namespace Responses {
            export interface $204 {
            }
            export interface $422 {
            }
        }
    }
    namespace PasswordRecoveryControllerForgot {
        export type RequestBody = Components.Schemas.PasswordForgotDto;
        namespace Responses {
            export interface $204 {
            }
        }
    }
    namespace PasswordRecoveryControllerRecovery {
        export type RequestBody = Components.Schemas.PasswordRecoveryDto;
        namespace Responses {
            export interface $204 {
            }
            export interface $404 {
            }
        }
    }
    namespace StatisticControllerGetlist {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
        }
        namespace Responses {
            export type $200 = Components.Schemas.StatisticDto;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace UserControllerCheckInvite {
        export type RequestBody = Components.Schemas.CheckTokenDto;
        namespace Responses {
            export interface $204 {
            }
            export interface $422 {
            }
        }
    }
    namespace UserControllerCreate {
        export type RequestBody = Components.Schemas.CreateUserDto;
        namespace Responses {
            export type $201 = Components.Schemas.UserDto;
            export interface $403 {
            }
            export interface $409 {
            }
        }
    }
    namespace UserControllerDelete {
        namespace Parameters {
            export type UserId = string;
        }
        export interface PathParameters {
            userId: Parameters.UserId;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace UserControllerGet {
        namespace Parameters {
            export type UserId = string;
        }
        export interface PathParameters {
            userId: Parameters.UserId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserDto;
            export interface $401 {
            }
            export interface $404 {
            }
        }
    }
    namespace UserControllerInvite {
        namespace Parameters {
            export type UserId = string;
        }
        export interface PathParameters {
            userId: Parameters.UserId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserDto;
            export interface $403 {
            }
            export interface $404 {
            }
            export interface $422 {
            }
        }
    }
    namespace UserControllerJoin {
        export type RequestBody = Components.Schemas.InviteUserDto;
        namespace Responses {
            export type $201 = Components.Schemas.TokenPairPayloadDto;
            export interface $422 {
            }
        }
    }
    namespace UserControllerList {
        namespace Parameters {
            export type CompanyId = string;
            export type Limit = number;
            export type Offset = number;
            export type OrderDirection = "ASC" | "DESC";
            export type OrderField = string;
            export type Role = ("admin" | "manager" | "worker")[];
            export type Search = string;
            export type Status = ("inactive" | "active" | "blocked")[];
        }
        export interface QueryParameters {
            offset?: Parameters.Offset;
            limit?: Parameters.Limit;
            orderField?: Parameters.OrderField;
            orderDirection?: Parameters.OrderDirection;
            search?: Parameters.Search;
            companyId?: Parameters.CompanyId;
            status?: Parameters.Status;
            role?: Parameters.Role;
        }
        namespace Responses {
            export type $200 = Components.Schemas.UserCollection;
            export interface $401 {
            }
            export interface $403 {
            }
        }
    }
    namespace UserControllerUpdate {
        namespace Parameters {
            export type UserId = string;
        }
        export interface PathParameters {
            userId: Parameters.UserId;
        }
        export type RequestBody = Components.Schemas.UpdateUserDto;
        namespace Responses {
            export type $200 = Components.Schemas.UserDto;
            export interface $403 {
            }
            export interface $422 {
            }
        }
    }
    namespace UserControllerUpdateEmployee {
        namespace Parameters {
            export type UserId = string;
        }
        export interface PathParameters {
            userId: Parameters.UserId;
        }
        export type RequestBody = Components.Schemas.UpdateEmployeeDto;
        namespace Responses {
            export type $200 = Components.Schemas.UserDto;
            export interface $403 {
            }
            export interface $422 {
            }
        }
    }
    namespace ZoneControllerCreate {
        namespace Parameters {
            export type CompanyId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        export type RequestBody = Components.Schemas.CreateZoneDto;
        namespace Responses {
            export type $201 = Components.Schemas.ZoneDto;
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace ZoneControllerDelete {
        namespace Parameters {
            export type CompanyId = string;
            export type ZoneId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            zoneId: Parameters.ZoneId;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace ZoneControllerGet {
        namespace Parameters {
            export type CompanyId = string;
            export type ZoneId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            zoneId: Parameters.ZoneId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ZoneDto;
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace ZoneControllerList {
        namespace Parameters {
            export type CompanyId = string;
            export type Limit = number;
            export type Offset = number;
            export type OrderDirection = "ASC" | "DESC";
            export type OrderField = string;
            export type Search = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        export interface QueryParameters {
            offset?: Parameters.Offset;
            limit?: Parameters.Limit;
            orderField?: Parameters.OrderField;
            orderDirection?: Parameters.OrderDirection;
            search?: Parameters.Search;
        }
        namespace Responses {
            export type $200 = Components.Schemas.ZoneCollection;
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace ZoneControllerUpdate {
        namespace Parameters {
            export type CompanyId = string;
            export type ZoneId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
            zoneId: Parameters.ZoneId;
        }
        export type RequestBody = Components.Schemas.UpdateZoneDto;
        namespace Responses {
            export type $201 = Components.Schemas.ZoneDto;
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
}
