
export enum Validate{{pascalCase}}Error {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface {{pascalCase}} {
    first?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface {{pascalCase}}Schema {
    data?: {{pascalCase}};
    form?: {{pascalCase}};
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: Validate{{pascalCase}}Error[];
}
