package shim

import (
	"github.com/hashicorp/terraform-plugin-framework/provider"
	"github.com/mheers/pulumi-stackit/provider/pkg/version"
	"github.com/stackitcloud/terraform-provider-stackit/stackit"
)

func NewProvider() provider.Provider {
	p := stackit.New(version.Version)
	return p()
}
