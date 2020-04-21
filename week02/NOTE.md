# ECMAScript Language

### 一般命令式编程语言构成
  1. Atom
     - Identifier
     - Literal
  2. Expression
     - Atom
     - Operator
     - Punctuator
  3. Statement
     - Expression
     - Keyword
     - Punctuator
  4. Structure
     - Function
     - Class
     - Process
     - Namespace
  5. Program
     - Program
     - Mould
     - Package
     - Library

#### Atom Identifier & Literal

  - WhiteSpace
    - \<TAB\>：`\t`
    - \<VT\>： `\v`
    - \<FF\>：`\f` 
    - \<SP\>：`\s`
    - \<NBSP\>：NO-BREAK SPACE
    - \<ZWNBSP\>：ZERO WIDTH NO-BREAK SPACE
    - \<USP\>
  - LineTerminator
    - \<LF\>：`\n`
    - \<CR\>：`\r`
    - \<LS\>
    - \<PS\>
  - Comment
    - // comment
    - /* comment */
  - CommonToken
    - IdentifierName
    - Punctuator
    - Template
    - [NumericLiteral](https://github.com/xzuopydev/Frontend-01-Template/blob/e0166dc161748360de3ba0cab4ead4d0d625f4f3/week02/NumericLiterals.md)
    - [StringLiteral](https://github.com/xzuopydev/Frontend-01-Template/blob/e0166dc161748360de3ba0cab4ead4d0d625f4f3/week02/StringLiterals.md)
    
#### 基本类型
- Type
  - Number
    - 浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
  - String
    - 支持码点: U+0000 ~ U+10FFFF， 但推荐只使用 U+0000 ~ U+FFFF （BMP）
    - 存储方式: UTF8/UTF16
  - Boolean
  - Null
  - Undifined
  - Symbol