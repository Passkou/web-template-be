export interface BasicApiResponse {
    code: string
    msg: string
    data: null | Record<string, unknown>
}

export interface ForbiddenResponse extends BasicApiResponse {
    code: 'Forbidden'
}

export interface CsrfErrorResponse extends BasicApiResponse {
    code: 'CsrfError'
    msg: string
    data: null
}
