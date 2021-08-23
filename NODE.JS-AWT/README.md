# Node.js Authentication

## what is json web token ?

**1.JSON web token(JWT) is a standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object**
**2.This information can be verified and trusted because it is digitally signed.JWT's can be signed using a secret or a public/private key pair**

## why would we use JSON web token ?
### There are several reasons why applications use JSON web tokens fro authentication.
**1.JWT is a good choice to be passed in Html and Http environments due to its smaller footprint when compared to other types of tokens**
**2.JSON web tokens can be signed using a shared secret and also by using public/private key pairs**
**3.It is easier to work with JWT as JSON parsers are common in most programming languages.**
**4.JWT is also suitable for implementing authorization in large-scale web applications.**

## Structure of JWT

### structure of a JSON web tokens consists of:
**.*.Header-consists of two parts: 1.Type of token,(JWT) 2.Signing algorithm,(SHA512)**
```Example
{
    "alg": "HS512",
    "type":"JWT"
}
```
**.*.Payload - contains the claims that provide information about a user who has been authenticated along with the other information like token expiry time**
```Example
{
    "sub": "09876545436",
    "name":"Smith joes",
    "admin": true
}
```
**.*.Signature - Final part of a token that wraps in the encoded header and payload, along with the algorithm and a secret**
```Example
HMACSHA512{
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret
}
```

## JWT Use-cases

### Some scenarios where JSON web tokens are useful:

**1.Authorization:: This is the most common scenario using JWT.Once the user logged in, each subsequent request will include the JWT, allowing the user to access routes,services,and resources that are permitted with that location.**

**2.Information exchange: JSON web  tokens are a good way of securely transmitting information between parties.**