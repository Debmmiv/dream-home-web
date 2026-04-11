const ROLE_RENTER = "renter";
const ROLE_OWNER = "owner";

function normalizeRoleValue(roleValue = "") {
  return String(roleValue).trim().toLowerCase();
}

export function getUserRoleFlags(roleValue = "") {
  const normalized = normalizeRoleValue(roleValue);

  if (!normalized) {
    return {
      isRenter: true,
      isOwner: false,
      isBoth: false,
    };
  }

  const hasBothKeyword = normalized.includes("both");
  const hasRenter = hasBothKeyword || normalized.includes(ROLE_RENTER);
  const hasOwner = hasBothKeyword || normalized.includes(ROLE_OWNER);

  if (!hasRenter && !hasOwner) {
    return {
      isRenter: true,
      isOwner: false,
      isBoth: false,
    };
  }

  return {
    isRenter: hasRenter,
    isOwner: hasOwner,
    isBoth: hasRenter && hasOwner,
  };
}

export function getUserRoleLabel(roleValue = "") {
  const { isRenter, isOwner, isBoth } = getUserRoleFlags(roleValue);

  if (isBoth) {
    return "Renter and Owner";
  }

  if (isOwner) {
    return "Owner";
  }

  if (isRenter) {
    return "Renter";
  }

  return "User";
}

export function getRoleTagTone(roleValue = "") {
  const { isBoth, isOwner } = getUserRoleFlags(roleValue);

  if (isBoth) {
    return "bg-purple-100 text-purple-700";
  }

  if (isOwner) {
    return "bg-amber-100 text-amber-700";
  }

  return "bg-emerald-100 text-emerald-700";
}
