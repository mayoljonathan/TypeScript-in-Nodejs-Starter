import { check } from 'express-validator';
import { AppErrorCode } from '../../shared';

/**
 * The create category data-model validator.
 */
export const createCategoryValidator = [
  /* name field. */
  check('name')
    .exists({ checkNull: true })
    .withMessage({
      code: AppErrorCode.IsRequired,
      title: 'Field is required',
      detail: 'Name is required'
    })

    .isString()
    .withMessage({
      code: AppErrorCode.InvalidType,
      title: 'Invalid field type',
      detail: 'Name must be series of characters (String)'
    })

    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage({
      code: AppErrorCode.InvalidLength,
      title: 'Invalid field length',
      detail: 'Name must be from (2 - 50) characters length'
    })
];
