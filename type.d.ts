declare namespace Components {
    namespace Schemas {
        export interface BaseCollectionMetaResponse {
            count: number;
        }
        export interface CheckCodeDto {
            code: string;
        }
        export interface CheckPostOrderDto {
            equipmentId: string;
            locationFrom?: string;
            locationTo?: string;
            clientEmailToken?: string;
            plugInType?: "frontapp" | "outlook" | "gmail";
        }
        export interface CheckPostedOrderMulti {
            clientEmailToken?: string;
            plugInType?: "frontapp" | "outlook" | "gmail";
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
            showDashboard: boolean;
            activeTms?: TmsDTO;
            activeRate?: TmsRateDTO;
            isSamlActive?: boolean;
            samlRedirectUrl?: string;
        }
        export interface ConvertToHtmlDto {
            markDown: string;
        }
        export interface CostCollection {
            meta: BaseCollectionMetaResponse;
            data: number[][];
            zones: ZoneDto[];
        }
        export interface CreateAdminUserDto {
            email: string;
            password: string;
            firstName: string;
            lastName: string;
        }
        export interface CreateCompanyDto {
            email: string;
            name: string;
            maxEmployees: number;
            domain: string;
            showDashboard?: boolean;
        }
        export interface CreateEquipmentConfigDto {
            equipmentTypes: string;
            values: string[];
        }
        export interface CreateEquipmentDto {
            name: string;
            description?: string;
            template?: string;
            isDefault?: boolean;
            minimumCost?: number;
            mphTransitTime?: number;
            margin?: number;
            equipmentAlias?: string[];
            fuelSurcharge?:number;
        }
        export interface CreateInboxMailDto {
            invalidData?: boolean;
            zipCodeFrom?: string;
            zipCodeTo?: string;
            distance?: number;
            weight?: number;
            costPerMile?: number;
            equipmentId?: string;
            dimension?: string;
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
        export interface DarftDto {
            plugInType: string;
            clientEmailToken: unknown;
            text: unknown;
            locationFrom: unknown;
            locationTo: unknown;
            weight: unknown;
            distance: unknown;
            cost: unknown;
            costPerMile: unknown;
            equipment: unknown;
            totalTruckCost: unknown;
            pickupTimestamp?: string;
            deliveryTimestamp?: string;
        }
        export interface DistanceByCodesRequestDto {
            zipCodeFrom: string;
            zipCodeTo: string;
        }
        export interface DistanceByCodesResponseDto {
            distance: number;
            zipCodeFrom: string;
            zipCodeTo: string;
        }
        export interface DistanceByLocationsRequestDto {
            locationFrom: string;
            locationTo: string;
        }
        export interface DomainQuoteDto {
            domain: string;
            quote: number;
        }
        export interface EmailQuoteDto {
            email: string;
            quote: number;
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
            minimumCost?: number;
            mphTransitTime?: number;
            margin?: number;
            equipmentAlias?: string[];
            fuelSurcharge?:number;
        }
        export interface ErrorStoreDto {
            errorMessage: string;
            errorStack: string;
            clientSource: string;
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
            locationFrom: unknown;
            locationTo: unknown;
            weight: unknown;
            distance: unknown;
            cost: unknown;
            costPerMile: unknown;
            equipment: unknown;
            totalTruckCost: unknown;
            pickupTimestamp?: string;
            deliveryTimestamp?: string;
        }
        export interface FrontAppMessageMulti {
            parentClientEmailToken: unknown;
            frontappauthtoken: unknown;
            text: unknown;
            username: unknown;
            quotes: string[];
        }
        export interface FrontappUpdatetokne {
            apitoken?: unknown;
            frontappAuthtoken?: unknown;
            companyid?: unknown;
            id: unknown;
        }
        export interface HotLanesResponseDto {
            city: string;
            latitude: string;
            longitude: string;
            area: string;
            Rank: number;
            quote: number;
            state: string;
            zipCode: string;
        }
        export interface IRawMessages {
            pluginUserEmail?: string;
            pluginUserName?: string;
            margin?: number;
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
            transitTime?: number;
            totalTruckCost?: number;
        }
        export interface InviteUserDto {
            token: string;
            password: string;
            firstName: string;
            lastName: string;
        }
        export interface LatLongDto {
            latitude: string[];
            longitude: string[];
            city: string[];
            state: string[];
            zipCode: string[];
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
        export interface MultiDarftDto {
            plugInType: string;
            parentClientEmailToken: unknown;
            text: unknown;
            quotes: string[];
        }
        export interface MultiInboxFrontAppDto {
            equipmentId: string;
            locationFrom?: string;
            locationTo?: string;
            weight?: number;
            distance?: number;
            costPerMile?: number;
            from?: string;
            subject?: string;
            text?: string;
            clientEmailToken?: string;
            parentClientEmailToken?: string;
            plugInType?: "web" | "frontapp" | "outlook" | "gmail";
            pluginUserEmail?: string;
            pluginUserName?: string;
            shipmentId?: number;
            loads?: number;
        }
        export interface MultiQuoteTmsDTO {
            plugInType: string;
            pluginUserEmail?: string;
            pluginUserName?: string;
            clientEmailToken: unknown;
            from?: string;
            subject?: string;
            text?: string;
            quotes: string[];
        }
        export interface MultiQuoteUpdateDto {
            template?: string;
        }
        export interface OriginDestinationMapResponseDto {
            location: LatLongDto[];
        }
        export interface OutlookSaveDto {
            clientEmailToken: unknown;
            text: unknown;
            locationFrom: unknown;
            locationTo: unknown;
            weight: unknown;
            distance: unknown;
            cost: unknown;
            costPerMile: unknown;
            equipment: unknown;
            totalTruckCost: unknown;
            pickupTimestamp?: string;
            deliveryTimestamp?: string;
        }
        export interface OutlookSaveMultiDto {
            parentClientEmailToken: unknown;
            text: unknown;
            quotes: string[];
        }
        export interface PasswordForgotDto {
            email: string;
        }
        export interface PasswordRecoveryDto {
            code: string;
            password: string;
        }
        export interface PostOrderDto {
            equipmentId: string;
            locationFrom?: string;
            locationTo?: string;
            weight?: number;
            distance?: number;
            costPerMile?: number;
            from?: string;
            subject?: string;
            text?: string;
            clientEmailToken?: string;
            plugInType?: "frontapp" | "outlook" | "gmail";
            pluginUserEmail?: string;
            pluginUserName?: string;
            businessUnitID?: number;
            totalCost?: number;
            pickupTimestamp?: string;
            deliveryTimestamp?: string;
        }
        export interface QuoteDto {
            email: string;
            subject: string;
            domain: string;
            zipCodeFrom: string;
            zipCodeTo: string;
            locationFrom: string;
            locationTo: string;
            distance: number;
            dimension: string;
            equipment: string;
            costPerMile: number;
            cost: number;
            transitTime: number;
            source: string;
            uniqueEmailId: string;
            sentCost: number;
            rebuild: boolean;
            userEmail: string;
            companyName: string;
            createdAt: string;
            updatedAt: string;
            status: string;
            originZone: string;
            destinationZone: string;
        }
        export interface QuoteResponseDto {
            data: QuoteDto[];
            total: number;
        }
        export interface RateDataDTo {
            locationFrom: string;
            locationTo: string;
            equipmentName: string;
        }
        export interface RebuildInboxFrontAppDto {
            equipmentId: string;
            locationFrom?: string;
            locationTo?: string;
            weight?: number;
            distance?: number;
            costPerMile?: number;
            from?: string;
            subject?: string;
            text?: string;
            clientEmailToken?: string;
            plugInType?: "web" | "frontapp" | "outlook" | "gmail";
            pluginUserEmail?: string;
            pluginUserName?: string;
            margin?: number;
        }
        export interface RebuildInboxMailDto {
            equipmentId: string;
            locationFrom?: string;
            locationTo?: string;
            weight?: number;
            distance?: number;
            costPerMile?: number;
            from?: string;
            subject?: string;
            text?: string;
            plugInType?: "web" | "frontapp" | "outlook" | "gmail";
        }
        export interface RefreshTokenDto {
            refreshToken: string;
        }
        export interface SaveAPiDto {
            tmsId: string;
            tmsAuth: unknown;
        }
        export interface SaveRateApiDto {
            tmsRateId: string;
            tmsRateAuth: unknown;
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
        export interface TestApiDto {
            tmsId: string;
            tmsAuth: unknown;
        }
        export interface TestRateApiDto {
            tmsRateId: string;
            tmsRateAuth: unknown;
        }
        export interface TmsDTO {
            id?: string; // uuid
            name?: string;
            authConfig?: unknown;
            icon?: string;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
        }
        export interface TmsRateDTO {
            id?: string; // uuid
            name?: string;
            authConfig?: unknown;
            icon?: string;
            createdAt?: string; // date-time
            updatedAt?: string; // date-time
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
        export interface TopCompaniesResponseDto {
            name: string;
            quote: number;
        }
        export interface TopRequestedDomainResponseDto {
            equipmentName: string;
            items: DomainQuoteDto[];
        }
        export interface TopRequestedEmailsResponseDto {
            name: string;
            data: EmailQuoteDto[];
        }
        export interface TopRequestedEquipmentResponseDto {
            name: string;
            quote: number;
        }
        export interface UpdateCompanyDto {
            name?: string;
            maxEmployees?: number;
            status?: "inactive" | "active" | "blocked";
            showDashboard?: boolean;
        }
        export interface UpdateCostDto {
            data: number[][];
            zones: ZoneDto[];
        }
        export interface UpdateEmployeeDto {
            role?: "admin" | "manager" | "worker";
            status?: "inactive" | "active" | "blocked";
            samlStatus?: boolean;
        }
        export interface UpdateEquipmentDto {
            name?: string;
            description?: string;
            template?: string;
            isDefault?: boolean;
            minimumCost?: number;
            mphTransitTime?: number;
            margin?: number;
            equipmentAlias?: string[];
            fuelSurcharge?:number;
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
            datUserName?: string;
            defaultEquipmentId?: string;
            signature?: string;
        }
        export interface UpdateZipCostDto {
            id: string;
            cost: number;
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
            datUserName?: string;
            defaultEquipment?: EquipmentDto;
            signature?: string;
            samlStatus?: boolean;
        }
        export interface UserEntity {
        }
        export interface ZipCodePostDto {
            locationFrom: string;
            locationTo: string;
            equipmentId: string;
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
    namespace EquipmentConfigControllerAddEquipmentAlias {
        export type RequestBody = Components.Schemas.CreateEquipmentConfigDto;
        namespace Responses {
            export interface $201 {
            }
            export interface $401 {
            }
        }
    }
    namespace EquipmentConfigControllerDeleteEquipmentConfig {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $401 {
            }
        }
    }
    namespace EquipmentConfigControllerGetListOfEquipmentAlias {
        namespace Responses {
            export interface $200 {
            }
            export interface $401 {
            }
        }
    }
    namespace EquipmentConfigControllerUpdateEquipmentConfig {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = Components.Schemas.CreateEquipmentConfigDto;
        namespace Responses {
            export interface $200 {
            }
            export interface $401 {
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
    namespace FrontAppControllerConvertToHtml {
        export type RequestBody = Components.Schemas.ConvertToHtmlDto;
        namespace Responses {
            export interface $201 {
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
    namespace FrontAppControllerGetErrors {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace FrontAppControllerGetMultiQuote {
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
    namespace FrontAppControllerGetdatas {
        namespace Parameters {
            export interface AllData {
            }
            export interface Date {
            }
            export type DateFrom = string;
            export type DateTo = string;
            export interface Month {
            }
            export interface Token {
            }
            export interface Year {
            }
        }
        export interface QueryParameters {
            token?: Parameters.Token;
            allData?: Parameters.AllData;
            date?: Parameters.Date;
            month?: Parameters.Month;
            year?: Parameters.Year;
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace FrontAppControllerListtoken {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace FrontAppControllerMultiRebuild {
        export type RequestBody = Components.Schemas.MultiInboxFrontAppDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerMultiSaveDraft {
        export type RequestBody = Components.Schemas.MultiDarftDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerRebuild {
        export type RequestBody = Components.Schemas.RebuildInboxFrontAppDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSaveDraft {
        export type RequestBody = Components.Schemas.DarftDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSaveError {
        export type RequestBody = Components.Schemas.ErrorStoreDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSaveGmail {
        export type RequestBody = Components.Schemas.OutlookSaveDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSaveGmailDataMulti {
        export type RequestBody = Components.Schemas.OutlookSaveMultiDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSaveOutlookData {
        export type RequestBody = Components.Schemas.OutlookSaveDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSaveOutlookDataMulti {
        export type RequestBody = Components.Schemas.OutlookSaveMultiDto;
        namespace Responses {
            export interface $201 {
            }
        }
    }
    namespace FrontAppControllerSearchAddres {
        namespace Parameters {
            export interface Search {
            }
        }
        export interface QueryParameters {
            search?: Parameters.Search;
        }
        namespace Responses {
            export interface $200 {
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
    namespace FrontAppControllerSendEmailMulti {
        export type RequestBody = Components.Schemas.FrontAppMessageMulti;
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
    namespace FrontAppControllerUpdateMultiQuote {
        namespace Parameters {
            export type TemplateId = string;
        }
        export interface PathParameters {
            templateId: Parameters.TemplateId;
        }
        export type RequestBody = Components.Schemas.MultiQuoteUpdateDto;
        namespace Responses {
            export interface $200 {
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
    namespace ReportsControllerEquipmentlist {
        namespace Parameters {
            export type Companies = string[];
            export type CompanyId = string;
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerHotLanes {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.HotLanesResponseDto;
        }
    }
    namespace ReportsControllerLocation {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerMapMarker {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerMapMarkerCluster {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerOriginDestinationMap {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.OriginDestinationMapResponseDto;
        }
    }
    namespace ReportsControllerQuote {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type Limit = number;
            export type Skip = number;
            export type SortBy = string;
            export type SortOrder = "ASC" | "DESC";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            skip?: Parameters.Skip;
            limit?: Parameters.Limit;
            sortBy?: Parameters.SortBy;
            sortOrder?: Parameters.SortOrder;
        }
        namespace Responses {
            export type $200 = Components.Schemas.QuoteResponseDto;
        }
    }
    namespace ReportsControllerTopCompanies {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TopCompaniesResponseDto;
        }
    }
    namespace ReportsControllerTopRequestedDomain {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TopRequestedDomainResponseDto;
        }
    }
    namespace ReportsControllerTopRequestedEmails {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TopRequestedEmailsResponseDto;
        }
    }
    namespace ReportsControllerTopRequestedEquipment {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export type $200 = Components.Schemas.TopRequestedEquipmentResponseDto;
        }
    }
    namespace ReportsControllerTopRequestedUser {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerTopUser {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerTopUserWithCost {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerTotalEmailRequested {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerWorldMap {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace ReportsControllerZones {
        namespace Parameters {
            export type Companies = string[];
            export type DateFrom = string;
            export type DateTo = string;
            export type EquipmentId = string;
            export type LocationFor = "ORIGIN" | "DESTINATION";
            export type Users = string[];
        }
        export interface QueryParameters {
            dateFrom?: Parameters.DateFrom;
            dateTo?: Parameters.DateTo;
            companies?: Parameters.Companies;
            users?: Parameters.Users;
            locationFor?: Parameters.LocationFor;
            equipmentId?: Parameters.EquipmentId;
        }
        namespace Responses {
            export interface $200 {
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
    namespace SudoControllerCreate {
        export type RequestBody = Components.Schemas.CreateAdminUserDto;
        namespace Responses {
            export type $201 = Components.Schemas.UserDto;
            export interface $409 {
            }
        }
    }
    namespace SudoControllerCreateInboxMail {
        namespace Parameters {
            export type UserId = string;
        }
        export interface PathParameters {
            userId: Parameters.UserId;
        }
        export type RequestBody = Components.Schemas.CreateInboxMailDto;
        namespace Responses {
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace SudoControllerDelete {
        namespace Parameters {
            export type CompanyId = string;
        }
        export interface PathParameters {
            companyId: Parameters.CompanyId;
        }
        namespace Responses {
            export interface $204 {
            }
            export interface $403 {
            }
            export interface $404 {
            }
        }
    }
    namespace SudoControllerDistanceByLocations {
        export type RequestBody = Components.Schemas.DistanceByLocationsRequestDto;
        namespace Responses {
            export type $200 = Components.Schemas.DistanceByCodesResponseDto;
            export interface $404 {
            }
        }
    }
    namespace SudoControllerDistanceByZipCodes {
        export type RequestBody = Components.Schemas.DistanceByCodesRequestDto;
        namespace Responses {
            export type $200 = Components.Schemas.DistanceByCodesResponseDto;
            export interface $404 {
            }
        }
    }
    namespace TmsControllerCheckOrderPosted {
        export type RequestBody = Components.Schemas.CheckPostOrderDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerCheckOrderPostedMulti {
        export type RequestBody = Components.Schemas.CheckPostedOrderMulti;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerCreateOrder {
        export type RequestBody = Components.Schemas.PostOrderDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerDeactivate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerGetActiveTms {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerGetPriceFromZip {
        export type RequestBody = Components.Schemas.ZipCodePostDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerGetTms {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerListTms {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerPostOrder {
        export type RequestBody = Components.Schemas.PostOrderDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerPostOrderMulti {
        export type RequestBody = Components.Schemas.MultiQuoteTmsDTO;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerSaveTms {
        export type RequestBody = Components.Schemas.SaveAPiDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerTestApi {
        export type RequestBody = Components.Schemas.TestApiDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsControllerUpdatePice {
        export type RequestBody = Components.Schemas.UpdateZipCostDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerDeactivate {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerGetActiveTms {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerGetRate {
        export type RequestBody = Components.Schemas.RateDataDTo;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerGetRateHistory {
        export type RequestBody = Components.Schemas.RateDataDTo;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerGetTms {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerListTms {
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerSaveTms {
        export type RequestBody = Components.Schemas.SaveRateApiDto;
        namespace Responses {
            export interface $200 {
            }
        }
    }
    namespace TmsRateControllerTestApi {
        export type RequestBody = Components.Schemas.TestRateApiDto;
        namespace Responses {
            export interface $200 {
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
